import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase/config";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import AuthContext from "./AuthContext";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    let unsubscribe;
    if (currentUser) {
      const userDoc = doc(db, "users", currentUser.uid);
      unsubscribe = onSnapshot(userDoc, (docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentUser]);

  const updateFirestore = async (newData) => {
    if (currentUser) {
      const userDoc = doc(db, "users", currentUser.uid);
      await setDoc(userDoc, newData);
    }
  };

  const createNewSession = () => ({
    id: crypto.randomUUID(),
    name: "",
    startDate: new Date().toISOString(),
    endDate: null,
    applications: [],
  });

  const createApplication = () => ({
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

  const createInterview = () => ({
    id: crypto.randomUUID(),
    date: "",
    length: "",
    location: "",
    appointees: [],
    notes: "",
  });

  const addSession = async () => {
    const newSession = createNewSession();
    const newData = {
      ...data,
      sessions: [...data.sessions, newSession],
      currentSessionId: newSession.id, // Set the current session to the new session
    };
    setData(newData);
    await updateFirestore(newData);
    return newSession;
  };

  const removeSession = async (sessionId) => {
    const newData = {
      ...data,
      sessions: data.sessions.filter((session) => session.id !== sessionId),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const editSession = async (sessionId, updatedFields) => {
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId ? { ...session, ...updatedFields } : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const addApplication = async (sessionId, applicationFields = {}) => {
    const newApplication = { ...createApplication(), ...applicationFields };
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: [...session.applications, newApplication],
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const removeApplication = async (sessionId, applicationId) => {
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: session.applications.filter(
                (app) => app.id !== applicationId
              ),
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const editApplication = async (sessionId, applicationId, updatedFields) => {
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: session.applications.map((app) =>
                app.id === applicationId ? { ...app, ...updatedFields } : app
              ),
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const updateApplicationStatus = async (sessionId, applicationId, status) => {
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: session.applications.map((app) =>
                app.id === applicationId
                  ? { ...app, status, lastUpdated: new Date().toISOString() }
                  : app
              ),
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const changeApplicationStatus = async (sessionId, applicationId, status) => {
    await updateApplicationStatus(sessionId, applicationId, status);
  };

  const changeCurrentSessionId = async (sessionId) => {
    const newData = {
      ...data,
      currentSessionId: sessionId,
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const addInterview = async (
    sessionId,
    applicationId,
    interviewFields = {}
  ) => {
    const newInterview = { ...createInterview(), ...interviewFields };
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: session.applications.map((app) =>
                app.id === applicationId
                  ? {
                      ...app,
                      interviews: [...app.interviews, newInterview],
                    }
                  : app
              ),
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const removeInterview = async (sessionId, applicationId, interviewId) => {
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: session.applications.map((app) =>
                app.id === applicationId
                  ? {
                      ...app,
                      interviews: app.interviews.filter(
                        (interview) => interview.id !== interviewId
                      ),
                    }
                  : app
              ),
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const editInterview = async (
    sessionId,
    applicationId,
    interviewId,
    updatedFields
  ) => {
    const newData = {
      ...data,
      sessions: data.sessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              applications: session.applications.map((app) =>
                app.id === applicationId
                  ? {
                      ...app,
                      interviews: app.interviews.map((interview) =>
                        interview.id === interviewId
                          ? { ...interview, ...updatedFields }
                          : interview
                      ),
                    }
                  : app
              ),
            }
          : session
      ),
    };
    setData(newData);
    await updateFirestore(newData);
  };

  const value = {
    data,
    addSession,
    removeSession,
    editSession,
    addApplication,
    removeApplication,
    editApplication,
    updateApplicationStatus,
    changeApplicationStatus,
    changeCurrentSessionId,
    addInterview,
    removeInterview,
    editInterview,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
