import React from 'react';
import { ReadingListDataType, ReadingListCompleteDataObject } from './reading-list.data'



const mapReadingListData = (readingListEntry: ReadingListDataType) => {
    return (
        <tbody>
            <td>{readingListEntry.title}</td>
            <td>{readingListEntry.description}</td>
            <td>{readingListEntry.readingType}</td>
        </tbody>

    )
}

const ReadingListTable = (tableData: ReadingListCompleteDataObject)  => {
    const { data } = tableData
    const tableContents = data.map((entry) => mapReadingListData(entry))

    return (
    <table className="table-auto">
        <thead>
            <th>Title</th>
            <th>description</th>
            <th>readingType</th>
        </thead>
        {tableContents}        
    </table>
    )
}

export default ReadingListTable