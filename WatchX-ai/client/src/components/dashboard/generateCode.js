
  /**
   * Generates a random code of length 5 to be used as exam code
   */
   function generateCode() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var length = 5;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    setExamCode(result);
    navigator.clipboard.writeText(result);
  }