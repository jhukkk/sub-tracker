import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getSubscriptionDetails, getSubscriptions, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', getSubscriptions);

subscriptionRouter.get('/:id', getSubscriptionDetails);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/', (req, res) => res.send( {title: 'UPDATE subscription' }));

subscriptionRouter.delete('/', (req, res) => res.send( {title: 'DELETE subscription' }));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send( {title: 'CANCEL subscription' }));

subscriptionRouter.get('/upcoming_renewals', (req, res) => res.send( {title: 'GET upcoming renewals' }));


export default subscriptionRouter;