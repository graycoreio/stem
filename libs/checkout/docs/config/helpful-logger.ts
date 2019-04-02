import {Processor, Document} from 'dgeni';

/**
 * This processor is here temporarily to get a better look at the docs objects (which are typed as "any") while we organize documentation.
 */
export class HelpfulLogger implements Processor {
  name = 'helpful-logger';
  $runBefore = ['docs-processed'];

  $process(docs: Document) {
    docs.map(doc => {
    })
  }
}
