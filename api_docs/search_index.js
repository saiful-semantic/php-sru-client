var search_data = {
    'index': {
        'searchIndex': ["scriptotek","scriptotek\\sru","scriptotek\\sru\\client","scriptotek\\sru\\explainresponse","scriptotek\\sru\\invalidresponseexception","scriptotek\\sru\\record","scriptotek\\sru\\records","scriptotek\\sru\\response","scriptotek\\sru\\responseinterface","scriptotek\\sru\\searchretrieveresponse","scriptotek\\sru\\client::__construct","scriptotek\\sru\\client::urlto","scriptotek\\sru\\client::gethttpoptions","scriptotek\\sru\\client::search","scriptotek\\sru\\client::records","scriptotek\\sru\\client::explain","scriptotek\\sru\\explainresponse::__construct","scriptotek\\sru\\invalidresponseexception::__construct","scriptotek\\sru\\record::__construct","scriptotek\\sru\\records::__construct","scriptotek\\sru\\records::__get","scriptotek\\sru\\records::numberofrecords","scriptotek\\sru\\records::current","scriptotek\\sru\\records::key","scriptotek\\sru\\records::rewind","scriptotek\\sru\\records::next","scriptotek\\sru\\records::valid","scriptotek\\sru\\response::__construct","scriptotek\\sru\\response::asxml","scriptotek\\sru\\responseinterface::__construct","scriptotek\\sru\\responseinterface::asxml","scriptotek\\sru\\searchretrieveresponse::__construct","scriptotek\\sru\\searchretrieveresponse::next"],
        'info': [["Scriptotek","","Scriptotek.html","","",3],["Scriptotek\\Sru","","Scriptotek\/Sru.html","","",3],["Client","Scriptotek\\Sru","Scriptotek\/Sru\/Client.html","","SRU client",1],["ExplainResponse","Scriptotek\\Sru","Scriptotek\/Sru\/ExplainResponse.html"," < Response","Explain response",1],["InvalidResponseException","Scriptotek\\Sru","Scriptotek\/Sru\/InvalidResponseException.html"," < Exception","",1],["Record","Scriptotek\\Sru","Scriptotek\/Sru\/Record.html","","Single record from a SRU response",1],["Records","Scriptotek\\Sru","Scriptotek\/Sru\/Records.html","","When iterating, methods are called in the following",1],["Response","Scriptotek\\Sru","Scriptotek\/Sru\/Response.html","","Generic SRU response",1],["ResponseInterface","Scriptotek\\Sru","Scriptotek\/Sru\/ResponseInterface.html","","Interface defining data objects that hold the information",1],["SearchRetrieveResponse","Scriptotek\\Sru","Scriptotek\/Sru\/SearchRetrieveResponse.html"," < Response","SearchRetrieve response, containing a list of records",1],["Client::__construct","Scriptotek\\Sru\\Client","Scriptotek\/Sru\/Client.html#method___construct","(string $url, array $options = null, <abbr title=\"Guzzle\\Http\\Client\">Client<\/abbr> $httpClient = null)","Create a new client",2],["Client::urlTo","Scriptotek\\Sru\\Client","Scriptotek\/Sru\/Client.html#method_urlTo","(string $cql, int $start = 1, int $count = 10)","Construct the URL for a CQL query",2],["Client::getHttpOptions","Scriptotek\\Sru\\Client","Scriptotek\/Sru\/Client.html#method_getHttpOptions","()","Get HTTP client configuration options (authentication,",2],["Client::search","Scriptotek\\Sru\\Client","Scriptotek\/Sru\/Client.html#method_search","(string $cql, int $start = 1, int $count = 10)","Perform a searchRetrieve request",2],["Client::records","Scriptotek\\Sru\\Client","Scriptotek\/Sru\/Client.html#method_records","(string $cql, int $count = 10, mixed $httpClient = null)","Perform a searchRetrieve request and return an iterator",2],["Client::explain","Scriptotek\\Sru\\Client","Scriptotek\/Sru\/Client.html#method_explain","()","Perform an explain request",2],["ExplainResponse::__construct","Scriptotek\\Sru\\ExplainResponse","Scriptotek\/Sru\/ExplainResponse.html#method___construct","(string $text, <a href=\"Scriptotek\/Sru\/Client.html\"><abbr title=\"Scriptotek\\Sru\\Client\">Client<\/abbr><\/a> $client = null)","Create a new explain response",2],["InvalidResponseException::__construct","Scriptotek\\Sru\\InvalidResponseException","Scriptotek\/Sru\/InvalidResponseException.html#method___construct","(string $message)","",2],["Record::__construct","Scriptotek\\Sru\\Record","Scriptotek\/Sru\/Record.html#method___construct","(<abbr title=\"Scriptotek\\Sru\\Danmichaelo\\QuiteSimpleXMLElement\\QuiteSimpleXMLElement\">QuiteSimpleXMLElement<\/abbr> $doc)","Create a new record",2],["Records::__construct","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method___construct","(string $cql, <a href=\"Scriptotek\/Sru\/Client.html\"><abbr title=\"Scriptotek\\Sru\\Client\">Client<\/abbr><\/a> $client, int $count = 10, mixed $httpClient = null)","Create a new records iterator",2],["Records::__get","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method___get","($prop)","Return error message from last reponse, if any",2],["Records::numberOfRecords","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method_numberOfRecords","()","Return the number of records",2],["Records::current","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method_current","()","Return the current element",2],["Records::key","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method_key","()","Return the key of the current element",2],["Records::rewind","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method_rewind","()","Rewind the Iterator to the first element",2],["Records::next","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method_next","()","Move forward to next element",2],["Records::valid","Scriptotek\\Sru\\Records","Scriptotek\/Sru\/Records.html#method_valid","()","Check if current position is valid",2],["Response::__construct","Scriptotek\\Sru\\Response","Scriptotek\/Sru\/Response.html#method___construct","(string $text, <a href=\"Scriptotek\/Sru\/Client.html\"><abbr title=\"Scriptotek\\Sru\\Client\">Client<\/abbr><\/a> $client = null)","Create a new response",2],["Response::asXml","Scriptotek\\Sru\\Response","Scriptotek\/Sru\/Response.html#method_asXml","()","Get the raw xml response",2],["ResponseInterface::__construct","Scriptotek\\Sru\\ResponseInterface","Scriptotek\/Sru\/ResponseInterface.html#method___construct","(string $text, <a href=\"Scriptotek\/Sru\/Client.html\"><abbr title=\"Scriptotek\\Sru\\Client\">Client<\/abbr><\/a> $client = null)","Create a new response",2],["ResponseInterface::asXml","Scriptotek\\Sru\\ResponseInterface","Scriptotek\/Sru\/ResponseInterface.html#method_asXml","()","Get the raw xml response",2],["SearchRetrieveResponse::__construct","Scriptotek\\Sru\\SearchRetrieveResponse","Scriptotek\/Sru\/SearchRetrieveResponse.html#method___construct","(string $text, <a href=\"Scriptotek\/Sru\/Client.html\"><abbr title=\"Scriptotek\\Sru\\Client\">Client<\/abbr><\/a> $client = null)","Create a new searchRetrieve response",2],["SearchRetrieveResponse::next","Scriptotek\\Sru\\SearchRetrieveResponse","Scriptotek\/Sru\/SearchRetrieveResponse.html#method_next","()","Request next batch of records in the result set, or",2]]
    }
}
search_data['index']['longSearchIndex'] = search_data['index']['searchIndex']