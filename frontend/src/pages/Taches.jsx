import React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import TaskTable from "../components/taskTable";

const Taches = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <TaskTable />
      </Container>
      <Footer />
    </div>
  );
};

export default Taches;
