import { useEffect, useState } from "react";
import axios from "axios";

const AppV4 = () => {
  const [postData, setPostData] = useState([]);
  const [totalLength, setTotalLength] = useState();
  const paginateDataNumber = 10;
  const chunkedData = [];

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostData(res.data);
        console.log(res.data.length);
        console.log("Spliced Number", res.data.splice(11, 10));
        setTotalLength(res.data.length);
        makeDataInChunk(res.data);
      })
      .catch((err) => {});
  }, []);

  //   const makeDataInChunk = (data) => {
  //     const tempArray = [];
  //     let count = 0;
  //     loop1: for (let i = 0; i < paginateDataNumber; i++) {
  //       loop2: for (let j = count; j < paginateDataNumber; j++) {
  //         if (tempArray.length === 10) {
  //           count = i*10 + 1;
  //           console.log("This is temp array",tempArray,count)
  //           break loop2;
  //         } else {
  //           tempArray.push(data[j]);
  //         }
  //       }
  //       chunkedData.push(tempArray);
  //     }

  //     console.log("Chunked Data",chunkedData)
  //   };

  const makeDataInChunk = (data) => {
    const tempArray = [];
    let count = 0;
    for (let j = count; j < paginateDataNumber; j++) {
      if (tempArray.length === 10) {
        let countValue = count === 0 ? 11 : j * 10 + 1;
        count = countValue;
      } else {
        tempArray.push(data[j]);
      }
    }
    chunkedData.push(tempArray);

    console.log("Chunked Data", chunkedData);
  };

  const handlePagination = (paginationNumber) => {
    console.log("Test", paginationNumber);
  };

  return (
    <>
      {postData.length &&
        postData.map((postIter) => {
          return (
            <>
              <p> {postIter.id}</p>
              <p>{postIter.title}</p>
            </>
          );
        })}

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((paginationIter) => {
        return (
          <span onClick={() => handlePagination(paginationIter)}>
            {paginationIter}
          </span>
        );
      })}
    </>
  );
};

export default AppV4;
