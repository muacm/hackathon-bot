'use strict';

class InclusiveMessageChecker {
  constructor() {
    console.info('INFO: Inclusive check is running (for discord.msg.content)');
  }

  SendResponseForNonInclusiveMessages(author_message) {
    if (this.CheckForWord(author_message, 'he')) {
      return "not good to use words such as HE/HIM/HIS"
    } else if (this.CheckForWord(author_message, 'she')) {
      return "not good to use words such as SHE/HER"
    }
  }

  // function to perform word-search
  // function_name: CheckForWord()
  // @param: author_string, word_to_search
  CheckForWord(author_string, word_to_search) {
    let words_from_author_string = author_string.split(" ");
    console.log(words_from_author_string);
    for (let i = 0; i < words_from_author_string.length; i++) {
      if (words_from_author_string[i].toLowerCase() == word_to_search) {
        return true;
      }
    }
  }
}

module.exports = {
  "InclusiveMessageChecker": InclusiveMessageChecker
}