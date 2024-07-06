import React, { useState, useContext } from "react";
import styles from "./AddApplicationPopup.module.css";
import Popup from "../Popup/Popup"
import Icon from "../Icon/Icon";
import TextInput from "../TextInput/TextInput";
import DataContext from "../../contexts/DataContext";
import Button from "../Button/Button";

const AddApplicationPopup = ({ onClose, isOpen }) => {
  const { addApplication, data } = useContext(DataContext);

  // State to hold form inputs
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [notes, setNotes] = useState("");

  const handleAddApplication = async () => {
    const newApplication = {
      company,
      jobTitle,
      jobLink,
      notes,
      status: "draft", // or any default status
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };
    await addApplication(data.currentSessionId, newApplication);
    onClose();
  };

  return (
    <Popup isOpen={isOpen}  onClose={onClose} title={"Create New Application"}>
      <div className={styles.main}>
        <span className={styles.description}>
              Create a new application to save the current status, notes, and
              the history.
            </span>
          <TextInput
            label={"Company"}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <TextInput
            label={"Job Title"}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
          <h2 className={styles.subtitle}>Extra information</h2>
          <TextInput
            label={"Job Posting Link"}
            value={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
          />
          <TextInput
            label={"Notes"}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Button
            onClick={handleAddApplication}
            isPrimary
            
          >
            <Icon icon={"tick_filled"} />
            Create
          </Button>
        </div>
    </Popup>
  );
};

export default AddApplicationPopup;
