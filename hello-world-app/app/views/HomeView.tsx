// 3rd-party
import React from "react";
import type { ReactView } from "@ethicdevs/react-monolith";

// app
import type { GHUserData } from "../services/fetchUserData";
import Counter from "../islands/Counter";
import GitHubUserTag from "../islands/GitHubUserTag";

interface HomeViewProps {
  foo: string;
  users: Record<string, GHUserData | null>;
}

const HomeView: ReactView<HomeViewProps> = ({ foo, users }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <img
          src={"/public/assets/images/react_monolith_logo@64w.png"}
          style={{
            height: 64,
            width: 64,
          }}
        />
        <h1 style={{ marginLeft: 24 }}>React Monolith</h1>
      </div>
      <h2>It works {foo}!</h2>
      <p>
        React SSR + CSI using the Islands pattern for the ultimate A11Y/SEO
        solution!
      </p>
      <h3>Islands</h3>
      <div data-islandid={`${Counter.name}$$0`}>
        <Counter defaultValue={42} />
      </div>
      <div data-islandid={`${Counter.name}$$1`} style={{ marginTop: 15 }}>
        <Counter defaultValue={10} />
      </div>
      <div>
        {users != null && Object.keys(users).length >= 1 ? (
          Object.entries(users).map(([username, initialUserData], idx) => (
            <div key={username} data-islandid={`${GitHubUserTag.name}$$${idx}`}>
              <GitHubUserTag
                username={username}
                initialUserData={initialUserData}
              />
            </div>
          ))
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default HomeView;
