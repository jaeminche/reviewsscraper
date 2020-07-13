import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";

const TableContainer = ({ columns, data }) => {
  // you can get the react table functions by using the hook useTable

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });
  console.log("==999", data);
  return (
    <div bordered {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              const { render, getHeaderProps } = column;
              return <th {...getHeaderProps()}>{render("Header")}</th>;
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};
export default TableContainer;
