import { contactsCollection } from '../db/models/contacts.js';

export const getAllContact = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await contactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = contactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const contact = contactsCollection.findByIdAndUpdate(contactId, payload, {
    new: true,
  });
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = contactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};
