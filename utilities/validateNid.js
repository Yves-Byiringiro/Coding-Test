class ValidateNID {
  checkNidLength(nid) {
    const strNid = nid.toString();
    if (strNid.length != 16) {
      return false;
    } else {
      return true;
    }
  }
  checkStartsOfNid(nid) {
    const strNid = nid.toString();
    if (strNid.startsWith("1", 0)) {
      return true;
    } else {
      return false;
    }
  }
  checkEmptySpaceInNid(nid) {
    const strNid = nid.toString();
    if (strNid.includes(" ")) {
      return false;
    } else {
      return true;
    }
  }

  checkStringInNid(nid) {
    const strNid = nid.toString();
    const digits_only = (string) =>
      [...string].every((c) => "0123456789".includes(c));

    if (digits_only(strNid) === true) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new ValidateNID();
