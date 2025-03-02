import { contactsCollection } from '../db/models/contacts.js';

export const getAllContact = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (contactsId) => {
  const contacts = await contactsCollection.findById(contactsId);
  return contacts;
};
