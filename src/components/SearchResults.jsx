function SearchResults({ results }) {


    return ( 
        <div className="container">
            <h3>Results</h3>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>MediaPath</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    {
                        // map over results and create table rows
                        results.map((result) => {
                            return (
                                <tr key={result.id}>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    {/* <td>{result.media_path}</td>
                                    <td>{result.description}</td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
     );
}

export default SearchResults;