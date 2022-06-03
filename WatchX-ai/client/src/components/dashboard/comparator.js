/**********************************************************************/
/******************Comparators function ******************************/
/********************************************************************/
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  /**
   * @param {String} order asc or desc
   * @param {*} orderBy 
   * @returns descendingComparator value (-1,0,1)
   */
  
  //  Creates ascending and decending comparator
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }