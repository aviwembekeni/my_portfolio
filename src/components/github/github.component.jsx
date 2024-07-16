import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function Github() {
  return (
    <Row className="github-calendar-container">
      <h1 className="project-heading">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="aviwembekeni"
        transformData={selectLastHalfYear}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </Row>
  );
}

export default Github;
