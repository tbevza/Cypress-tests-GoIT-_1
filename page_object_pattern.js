import { LoginPage } from "../pages/login";

const loginPage = new LoginPage();

describe('Page object', () => {
    it('login  & logout 1', () => {

    loginPage.navigateToPage();

    loginPage.validateInputs();

    loginPage.openMainMenu();

    loginPage.logOut();

    })
  })


  import { LoginPage2 } from "../pages/homePage";

  const loginPage2 = new LoginPage2();

  describe('Page object'), () => {

    loginPage.navigateToPage();

    loginPage.validateInputs();

    loginPage.openMainMenu();

    loginPage.logOut();
  }