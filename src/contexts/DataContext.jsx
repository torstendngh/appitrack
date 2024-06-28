import React, { createContext, useState, useEffect } from "react";
import defaultData from "../constants/defaultData";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const initialData = { ...defaultData };
    if (initialData.sessions.length === 0) {
      initialData.sessions.push(createNewSession());
    } else {
      initialData.sessions = initialData.sessions.map(session => ({
        ...session,
        applications: [],
      }));
    }
    return initialData;
  });

  const createNewSession = () => ({
    id: crypto.randomUUID(),
    name: "",
    startDate: new Date().toISOString(),
    endDate: null,
    applications: [],
  });

  const createApplication = (sessionId) => ({
    id: crypto.randomUUID(),
    company: "",
    job: "",
    status: "",
    notes: "",
    jobLink: "",
    companyWebsite: "",
    appliedOn: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    interviews: [],
  });

  const createInterview = (applicationId) => ({
    id: crypto.randomUUID(),
    date: "",
    length: "",
    location: "",
    appointees: [],
    notes: "",
  });

  const addSession = () => {
    const newSession = createNewSession();
    setData(prevData => ({
      ...prevData,
      sessions: [...prevData.sessions, newSession],
    }));
  };

  const removeSession = (sessionId) => {
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.filter(session => session.id !== sessionId),
    }));
  };

  const editSession = (sessionId, updatedSession) => {
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { ...session, ...updatedSession } : session
      ),
    }));
  };

  const addApplication = (sessionId) => {
    const newApplication = createApplication();
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { 
          ...session, 
          applications: [...session.applications, newApplication] 
        } : session
      ),
    }));
  };

  const removeApplication = (sessionId, applicationId) => {
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { 
          ...session, 
          applications: session.applications.filter(app => app.id !== applicationId) 
        } : session
      ),
    }));
  };

  const editApplication = (sessionId, applicationId, updatedApplication) => {
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { 
          ...session, 
          applications: session.applications.map(app => 
            app.id === applicationId ? { ...app, ...updatedApplication } : app
          ) 
        } : session
      ),
    }));
  };

  const addInterview = (sessionId, applicationId) => {
    const newInterview = createInterview();
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { 
          ...session, 
          applications: session.applications.map(app => 
            app.id === applicationId ? { 
              ...app, 
              interviews: [...app.interviews, newInterview] 
            } : app
          ) 
        } : session
      ),
    }));
  };

  const removeInterview = (sessionId, applicationId, interviewId) => {
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { 
          ...session, 
          applications: session.applications.map(app => 
            app.id === applicationId ? { 
              ...app, 
              interviews: app.interviews.filter(interview => interview.id !== interviewId) 
            } : app
          ) 
        } : session
      ),
    }));
  };

  const editInterview = (sessionId, applicationId, interviewId, updatedInterview) => {
    setData(prevData => ({
      ...prevData,
      sessions: prevData.sessions.map(session => 
        session.id === sessionId ? { 
          ...session, 
          applications: session.applications.map(app => 
            app.id === applicationId ? { 
              ...app, 
              interviews: app.interviews.map(interview => 
                interview.id === interviewId ? { ...interview, ...updatedInterview } : interview
              ) 
            } : app
          ) 
        } : session
      ),
    }));
  };

  const value = {
    data,
    addSession,
    removeSession,
    editSession,
    addApplication,
    removeApplication,
    editApplication,
    addInterview,
    removeInterview,
    editInterview,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;