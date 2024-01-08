// import React from 'react'
// import { Modal, Form, Input, Button } from 'antd';

// function EditBook({ visible, bookData, onUpdate, onCancel }) {
//   const [form] = Form.useForm();

//   const handleOk = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         form.resetFields();
//         onUpdate({ ...bookData, ...values });
//       })
//       .catch((errorInfo) => {
//         console.log('Validation failed:', errorInfo);
//       });
//   };

  
//   return (
//     <div className='EditBook'>
//       <Modal
//       visible={visible}
//       title="Edit Book"
//       onCancel={onCancel}
//       footer={[
//         <Button key="cancel" onClick={onCancel}>
//           Cancel
//         </Button>,
//         <Button key="update" type="primary" onClick={handleOk}>
//           Update
//         </Button>,
//       ]}
//     >
//        <Form
//         form={form}
//         layout="vertical"
//         name="editBookForm"
//         initialValues={bookData} 
//       >
//          <Form.Item
//           name="title"
//           label="Title"
//           rules={[
//             {
//               required: true,
//               message: 'Please enter the title of the book',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="author"
//           label="Author"
//           rules={[
//             {
//               required: true,
//               message: 'Please enter the author of the book',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="price"
//           label="Price"
//           rules={[
//             {
//               required: true,
//               message: 'Please enter the price of the book',
//             },
//           ]}
//         >
//           <Input type="number" />
//         </Form.Item>
//       </Form>
//     </Modal>
//     </div>
//   )
// }

// export default EditBook