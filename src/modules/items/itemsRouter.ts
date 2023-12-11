import { Router, urlencoded } from 'express'
import { getItems, postItems } from './itemsController'

const urlencodedParser = urlencoded({ extended: true })

const itemsRouter = Router()

itemsRouter.get('/', getItems)
itemsRouter.post('/', urlencodedParser, postItems)

export default itemsRouter
