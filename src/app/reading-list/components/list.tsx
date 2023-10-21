import React from 'react';
import { ReadingListDataType } from './reading-list.data'


const mapReadingListData = (readingListEntry: ReadingListDataType) => {
    return (
        <tbody>
            <td>{readingListEntry.title}</td>
            <td>{readingListEntry.description}</td>
            <td>{readingListEntry.readingType}</td>
        </tbody>

    )
}

const ReadingListTable = (tableData: Array<ReadingListDataType>) => {

    return (
    <table className="table-auto">
        <thead>
            <th>Title</th>
            <th>description</th>
            <th>readingType</th>
        </thead>
        {tableData.map((entry) => {return mapReadingListData(entry)})}


        
    </table>
    )
}

export default ReadingListTable