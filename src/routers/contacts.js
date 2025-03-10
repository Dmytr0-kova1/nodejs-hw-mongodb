import { Router } from "express";
import { getContactsController, getContactByIdController, createContactController, patchContactController, deletContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(createContactController));

router.patch('/:contactId', ctrlWrapper(patchContactController));

router.delete('/:contactId', ctrlWrapper(deletContactController));

export default router;