class AppURL{
    // Declare a static property BaseURL and assign the base URL for the API (laravel URL whr api is fetched from)
  static BaseURL = "http://127.0.0.1:8000/api";

    // Declare a static property VisitorDetails and concatenate it with the base URL to form the complete URL
  static VisitorDetails = this.BaseURL+"/getvisitor"; 
  
  static PostContact = this.BaseURL+"/postcontact";
}

export default AppURL
