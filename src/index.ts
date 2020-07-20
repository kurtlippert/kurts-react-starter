/* eslint-disable prettier/prettier */
// ^^ I would like files that render view data to be formatted
// a bit differently from what prettier wants
import { Fragment as f, createElement as r } from 'react';
import { render } from 'react-dom';
import { div, section } from 'react-dom-factories';


/**
 * The render function requires one root node, 'fragment' is
 * like an empty root node (the rendered html will list the
 * passed in elements without a root)
 * @param elements react nodes you want to combine in the fragment
 */
const fragment = (...elements: React.ReactNode[]) => r(f, {}, elements);

/**
 * All webpage content will be nested under this root node
 * ```
 *  <section class="section">
 *    <div class="container">
 *      {the_content_here}
 *    </div>
 *  </section>
 * ```
 * @param content The rest of the app: headers, sidenavs, etc
 */
const root = (content: React.ReactNode) =>
  section({ className: 'section' },
    div({ className: 'container' }, content)
  );

/**
 * This is the variable that will hold
 */
const content = fragment();

render(root(content), document.querySelector('main'));
