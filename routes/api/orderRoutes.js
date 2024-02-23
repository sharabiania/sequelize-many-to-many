const router = require('express').Router();
const { Order, Product } = require('../../models');
const OrderProduct = require('../../models/OrderProduct');

// Create Order
router.post('/', async (req, res) => {
  try {    
    const newOrder = await Order.create(
      {
        userId: req.body.userId,        
      });

    for (const p of req.body.products) {
      
      const record = {
        orderId : newOrder.id,
        productId : p.id,
        quantity: p.quantity
      };      
      
      await OrderProduct.create(record);
    }

    return res.json(newOrder);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// GET a single order
router.get('/:id', async (req, res) => {
  try {
    
    const order = await Order.findByPk(req.params.id, {
      include: [{ 
        model: Product, 
        attributes: ['name', 'price'], 
        // through: {attributes: ['quantity']} 
      }],
    });


    const products = order.products.map(x => { 
      return { 
        name: x.name, 
        quantity: x.order_product.quantity,
        price: x.price,
        subtotal: x.order_product.quantity * parseFloat(x.price)
      }
    })
    
    const total = products.reduce((acc, x) => {
      return acc + x.quantity * ( parseFloat(x.price) || 0)
    }, 0);
    return res.json({total, products});
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orderData = await Order.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
