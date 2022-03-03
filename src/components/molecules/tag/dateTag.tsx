import React from "react";
import styled from "@emotion/styled";
import Date from "../../utils/date";

function DateTag({ dateString }: { dateString: string }) {
  return (
    <Tag>
      {/* dateはstringで返してもらう形にしたい。。 */}
      <Date dateString={dateString} />
    </Tag>
  );
}

export default DateTag;

const Tag = styled.div`
  color: white;
  background: black;
  padding: 2px 10px;
  border-radius: 30px;
`;
