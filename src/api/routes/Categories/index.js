import { Router } from 'express';
import CategoryController from '../../../controllers/category';
const CategoryRouter = Router();

const path = '/category';

CategoryRouter.get(`${path}/all`, CategoryController.getAllCategories);
CategoryRouter.post(`${path}/add`, CategoryController.addCategory);
CategoryRouter.put(`${path}/update`, CategoryController.updateCategory);
CategoryRouter.delete(`${path}/delete/:id`, CategoryController.deleteCategory);

export default CategoryRouter;
