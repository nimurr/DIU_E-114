import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button, Form } from "antd";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState } from "react";

const EditAboutUs = () => {
  const [form] = Form.useForm();
  const [content, setContent] = useState(
    "<p>Enter your 'About Us' content here.</p>"
  ); // Default content for the About Us section

  const handleSubmit = () => {
    console.log("Updated About Us Content:", content);
    // Handle form submission, e.g., update the about us section in the backend
  };

  return (
    <section className="w-full h-full min-h-screen ">
      {/* Header Section */}
      <div className="flex justify-between items-center py-5">
        <Link to="/settings" className="flex gap-4 items-center">
          <>
            <IoChevronBack className="text-2xl" />
          </>
          <h1 className="text-2xl font-semibold">About Us</h1>
        </Link>
      </div>

      {/* Form Section */}
      <div className="w-full p-6 rounded-lg shadow-md">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* React Quill for About Us Content */}
          <Form.Item name="content" initialValue={content}>
            <ReactQuill
              value={content}
              onChange={(value) => setContent(value)}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header dropdown
                  [{ font: [] }], // Font options
                  [{ list: "ordered" }, { list: "bullet" }], // Ordered and bullet lists
                  ["bold", "italic", "underline", "strike"], // Formatting options
                  [{ align: [] }], // Text alignment
                  [{ color: [] }, { background: [] }], // Color and background
                  ["blockquote", "code-block"], // Blockquote and code block
                  ["link", "image", "video"], // Link, image, and video upload
                  [{ script: "sub" }, { script: "super" }], // Subscript and superscript
                  [{ indent: "-1" }, { indent: "+1" }], // Indent
                  ["clean"], // Remove formatting
                ],
              }}
              style={{ height: "300px" }} // Set the increased height
            />
          </Form.Item>

          {/* Update Button */}
          <div className="flex justify-end md:mt-16 mt-20">
            <button
              // type="primary"
              // htmlType="submit"
              className="bg-[#038c6d] text-white px-5 text-xl py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default EditAboutUs;
