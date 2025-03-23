import { SORT_ORDER } from '../constants/index.js';
import { contactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const contactsQuery = contactsCollection.find();
  const contactsCount = await contactsCollection
    .find()
    .merge(contactsQuery)
    .countDocuments();
  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();
  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
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
