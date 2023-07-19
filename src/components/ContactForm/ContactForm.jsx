import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/Contacts/operations';
import { useState } from 'react';
import {
  FormWrap,
  AddModalBtn,
  UserIcon,
  PhoneIcon,
  InputForm,
  AddModal,
  OpenAddModal,
} from './ContactForm.styled';
import { PlusCircleOutlined } from '@ant-design/icons';

export const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [form] = FormWrap.useForm();
  const currentContacts = useSelector(state => state.contacts.items);
  const loader = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const showModal = () => {
    form.resetFields();
    setOpen(true);
  };
  const submit = value => {
    const formatTel = () => {
      const number = value.number;
      const phoneLength = number.length;

      if (phoneLength < 9) {
        return `+(${number.slice(0, 2)}) ${number.slice(2, 5)}-${number.slice(
          5,
          8
        )}-${number.slice(8)}`;
      }

      return `+(${number.slice(0, 2)}) ${number.slice(2, 5)}-${number.slice(
        5,
        8
      )}-${number.slice(8, 11)}`;
    };

    const newContact = { name: value.name, number: formatTel() };
    const newContactName = newContact.name.toLowerCase();

    if (
      currentContacts.find(
        contact => contact.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      dispatch(addContact(newContact));

      if (!loader) {
        form.resetFields();
        setOpen(false);
      }
    }
  };

  return (
    <>
      <OpenAddModal
        type="primary"
        onClick={showModal}
        title="add new contact"
        size={'large'}
      >
        <PlusCircleOutlined />
        Add contact
      </OpenAddModal>

      <AddModal
        footer={null}
        title="Add new contact"
        open={open}
        onCancel={() => setOpen(false)}
      >
        <FormWrap
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={submit}
        >
          <FormWrap.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input Name!',
                type: 'text',
              },
            ]}
          >
            <InputForm
              prefix={<UserIcon />}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </FormWrap.Item>

          <FormWrap.Item
            name="number"
            rules={[
              {
                required: true,
                message: 'Please input Number!',
                type: 'phone',
              },
            ]}
          >
            <InputForm
              prefix={<PhoneIcon />}
              type=""
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </FormWrap.Item>

          <FormWrap.Item>
            <AddModalBtn type="primary" htmlType="submit">
              Create contact
            </AddModalBtn>
          </FormWrap.Item>
        </FormWrap>
      </AddModal>
    </>
  );
};
