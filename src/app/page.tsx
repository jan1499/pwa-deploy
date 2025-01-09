"use client"

import ServiceWorkerRegister from '@/components/common/ServiceWorkerRegister'
import Login from './(auth)/login/page'

const HomePg = () => {
  return (
    <div>
      <ServiceWorkerRegister />
      <Login />
    </div>
  )
}

export default HomePg

// "use client"

// import Error from "@/components/common/Error";
// import Heading from "@/components/common/Heading";
// import { Input } from "@/components/common/Input";
// import MainHeading from "@/components/common/MainHeading";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   client_name: string;
//   domain_name: string;
// }

// export default function Home() {
//   const [formData, setFormData] = useState<FormData>({ client_name: '', domain_name: '' });
//   const [message, setMessage] = useState('');
//   const router = useRouter()

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };


//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const { client_name, domain_name } = formData;
//     const data = {
//       client: { name: client_name },
//       domain: { domain: domain_name, is_primary: true }
//     };

//     try {
//       const response = await axios.post('http://localhost:8000/api/tenants/create-tenant/', data);
//       setMessage(response.data.message);
//       router.push('/login');
//     } catch (error) {
//       router.push('/login');
//       console.error('Error:', error);
//       setMessage('An error occurred while creating the tenant.');
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="card p-4 shadow-lg" style={{ maxWidth: '450px', width: '100%' }}>
//         <Heading
//           text={"Create Tenant"}
//           subText="Taxflow is a project management tool. Create a domain to manage projects efficiently across tenants."
//           className="text-center mb-4"
//         />
//         <form onSubmit={handleSubmit}>
//           <Input
//             id="client_name"
//             label="Client Name"
//             type="text"
//             name="client_name"
//             value={formData.client_name}
//             onChange={handleChange}
//             isRequired={true}
//             className="mb-3"
//           />
//           <Input
//             id="domain_name"
//             label="Domain Name"
//             type="text"
//             name="domain_name"
//             value={formData.domain_name}
//             onChange={handleChange}
//             isRequired={true}
//             className="mb-3"
//           />
//           {message && <Error message={message} />}
//           <button type="submit" className="btn btn-primary w-100 ">Create</button>
//         </form>
//       </div>
//     </div>
//   );
// }
