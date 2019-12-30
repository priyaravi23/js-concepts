# Accessing Data

 - First preference should be to work with libs like `axios` and `superagent`.
 - Native constructs
    - XMLHTTPRequest
        - Callback based
        - Get back text / raw data1
        - Sends back cookies along with requests every time
        - Widely supported
        - Work with headers / OPTIONS object
    - Fetch API
        - Promise based
        - In-built support for json, blob
        - Does not send cookies back by default
        - All features are still not supported by a few browsers
        - For working with CORS, work with the `mode` property
