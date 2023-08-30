import React from "react";
import { styled } from "styled-components";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: space-between;
  padding: 20px;
`;

const TableTitleCell = styled(TableCell)`
  background-color: #f5f5f5;
`;
const StyledTableRow = styled(TableRow)`
  &:last-child {
    td {
      border-bottom: none;
    }
  }
`;
function ExtraContentTable({ extraContent }) {
  return (
    <Container>
      {extraContent &&
        extraContent.map((section, sectionIndex) => (
          <TableContainer component={Paper} key={sectionIndex}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableTitleCell colSpan={2}>
                    <Typography variant="subtitle1">
                      <b>{section.title}</b>
                    </Typography>
                  </TableTitleCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {section &&
                  section.info.map((infoItem, infoIndex) => (
                    <StyledTableRow key={infoIndex}>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                          {infoItem.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {infoItem.content &&
                          infoItem.content.map((contentItem, contentIndex) => (
                            <Typography
                              key={contentIndex}
                              sx={{ fontSize: 12, margin: 0 }}
                              paragraph
                            >
                              {contentItem}
                            </Typography>
                          ))}
                      </TableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))}
    </Container>
  );
}

export default ExtraContentTable;
