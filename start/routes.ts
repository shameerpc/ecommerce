/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/auth/signup', async () => {
  return { hello: 'world' }
})

Route.group(()=>{
  Route.post("/product", "ProductsController.addproduct");
Route.get("/product", "ProductsController.listproduct").middleware('auth')
Route.post("/cart", "ProductsController.addToCart").middleware('auth')
Route.get("/cart", "ProductsController.getCart").middleware('auth')
Route.delete("/cart/delete", "ProductsController.deleteCart").middleware('auth')
Route.post("/cart/update", "ProductsController.updateCart").middleware('auth')

}).prefix('/user')


Route.group(()=>{
  Route.post("/register", "UsersController.registration");
  Route.post("/login", "UsersController.login");
}).prefix('/auth')











