import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import SidebarAgent from "../../SidebarAgent";
import Items from "./Items";
import RefereesJson from "../refereesPagination.json";
import './app.css'
export default function PaginatedItems({ itemsPerPage }) {
  const itemss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const items = RefereesJson;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    console.log("jsonjson json my s ", itemOffset, "to", endOffset);
    setCurrentItems(items.slice(itemOffset, endOffset));
    //=======================================
    console.log("currentItemssss", items.slice(itemOffset, endOffset));
    console.log("currentItemssss2", itemss.slice(itemOffset, endOffset));
    //=======================================
    setPageCount(Math.ceil(items.length / itemsPerPage));
    //=======================================
    console.log("1st", Math.ceil(items.length / itemsPerPage));
    console.log("2st", Math.ceil(itemss.length / itemsPerPage));

    //=======================================
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    //=========================================
    console.log("firsttt", (event.selected * itemsPerPage) % items.length);
    console.log("second", (event.selected * itemsPerPage) % itemss.length);
    //=========================================
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <SidebarAgent />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "40%",
          width: "500px",
        }}
      >
        <h2 className="ermal">Testing css</h2>
        <Items currentItems={currentItems} />
        <ReactPaginate
         previousLabel={'prev'}
         nextLabel={'next'}
         pageCount={pageCount}
         onPageChange={handlePageClick}
         containerClassName={'pagination'}
         activeClassName={'active'}
       />
        
      </div>
    </>
  );
}
