import React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import AddForm from "../components/addForm";

const AddPage = () => {
  return (
    <div>
      <NavigationBar />
      <Container className="addform">
        <AddForm />
      </Container>
      <Footer />
    </div>
  );
};

export default AddPage;
