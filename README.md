# Insurance Quote Frontend application

This project was created using React with Vite as the build tool. The Node version required > v20.10.0.
Once installed Node just the code can be compiled with:

### `npm run build`

Right now the URL to the backend is hardcoded in the `useFetchQuote.js` file it needs to be changed in order to make it run locally

The project was deployed on Google App Engine and is accesible in this URL `https://frontend-dot-insurance-407608.uk.r.appspot.com`

The interface is divided in 4 sections:

## Vehicle's Details

It contains the Make, Year, Model and Purchase Price

## Vehicle's Usage

It contains the question of the purpose of the vehicle, if it is for business or not and the Mileage range estimated by the user

## Drive's Details

Includes the Date of Birth of the driver, the traffic violations or accidents, the number of claims and the years of driving experience

## Insurance History

Contains the number of years of auto insurance reported by the user

### Getting the Quote

Once all the sections are completed, a green mark will appear beside each section, then the `Get Quote` button will become enabled and once pressed, a call to the back end will be made
giving two possible answers, the Quote with the Reference number, the Premium and the monthly payments. The other response is a message asking the user to call the company to talk to an
Advisor to get an adequate quote for the specific needs.
