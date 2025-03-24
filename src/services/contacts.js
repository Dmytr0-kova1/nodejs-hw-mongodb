import Contact from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContact = async ({ page, perPage }) => {
  // const contacts = await Contact.find();
  // return contacts;
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = Contact.find();
  const contactsCount = await Contact.find()
    .merge(contactsQuery)
    .countDocuments();

  const students = await contactsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: students,
    ...paginationData,
  };
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = Contact.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const contact = Contact.findByIdAndUpdate(contactId, payload, {
    new: true,
  });
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = Contact.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};
