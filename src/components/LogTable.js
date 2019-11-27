import React from "react";
import useWebHookLogs from "../hooks/useWebookLogs";
import {Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";

const formatDate = ({seconds}) => new Date(seconds * 1000).toString();

const LogTable = ({uid}) => {
  const webhookLogs = useWebHookLogs(uid);
  if (!webhookLogs) {
    return "Loading..."
  }
  if (webhookLogs.length === 0) {
    return "No logs, yet";
  }
  return <Table>
    <TableHead>
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell>Method</TableCell>
        <TableCell>Query</TableCell>
        <TableCell>Body</TableCell>
        <TableCell>originalUrl</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {webhookLogs.map(({id, date, method, query, body, originalUrl}) => <TableRow key={id}>
        <TableCell>{formatDate(date)}</TableCell>
        <TableCell>{method}</TableCell>
        <TableCell>{JSON.stringify(query)}</TableCell>
        <TableCell>{JSON.stringify(body)}</TableCell>
        <TableCell>{originalUrl}</TableCell>
      </TableRow>)}
    </TableBody>
  </Table>
};

export default LogTable;