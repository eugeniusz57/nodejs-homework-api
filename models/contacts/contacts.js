const contactsPath = require("./contactsPath");
const fs = require("fs/promises");
const updateContacts = require("./updateContacts");
const uniqid = require("uniqid");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = await contacts.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: uniqid() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
}

async function updateById(id, data) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, ...data };
  await updateContacts(contacts);
  return contacts[idx];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
};
