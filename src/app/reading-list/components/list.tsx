import React from 'react';
import { ReadingListDataType, ReadingListCompleteDataObject } from './reading-list.data'



const mapReadingListData = (readingListEntry: ReadingListDataType) => {
    return (
        <tbody>
            <td>{readingListEntry.title}</td>
            <td>{readingListEntry.description}</td>
            <td>{readingListEntry.readingType}</td>
            <td>
                 <a href={readingListEntry.link}>Link</a>
            </td>

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
            <th>Description</th>
            <th>Format</th>
            <th>Link</th>
        </thead>
        {tableContents}        
    </table>
    )
}

export default ReadingListTable