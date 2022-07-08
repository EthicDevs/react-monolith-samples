import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import type { ReactIsland } from "@ethicdevs/react-monolith";

import { GHUserData, fetchUserData } from "../services/fetchUserData";

interface GitHubTabProps {
  username: string;
  initialUserData?: null | GHUserData;
}

const GitHubUserTag: ReactIsland<GitHubTabProps> = ({
  username,
  initialUserData,
}) => {
  const [loading, setLoading] = useState(initialUserData == null);
  const [userData, setUserData] = useState<GHUserData | null>(
    initialUserData || null
  );

  const refreshData = useCallback(() => {
    setLoading(true);
    fetchUserData(username, (data) => {
      setUserData(data);
      setLoading(false);
    });
  }, [setLoading, setUserData, username]);

  useEffect(() => {
    if (userData == null) {
      refreshData();
    }
  }, [refreshData, userData]);

  return (
    <div style={styles.tagContainer}>
      {userData != null ? (
        <img src={userData.avatar_url} style={styles.tagAvatar} />
      ) : (
        <div style={styles.tagAvatar} />
      )}
      <span style={styles.tagText}>@{username}</span>
      {loading ? (
        <strong>(Loading...)</strong>
      ) : (
        <button onClick={refreshData}>Reload</button>
      )}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  tagContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "monospace",
    marginTop: 12,
    padding: 8,
    height: 24,
    minHeight: 24,
    maxHeight: 24,
    borderRadius: 24 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    width: "max-content",
  },
  tagAvatar: {
    width: 24,
    minWidth: 24,
    maxWidth: 24,
    height: 24,
    minHeight: 24,
    maxHeight: 24,
    backgroundColor: "white",
    borderRadius: 24 / 2,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  tagText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default GitHubUserTag;
