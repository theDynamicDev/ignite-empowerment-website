/**
 * This function aims to organize classNames that you may pass into the function as args.
 * example:
 *
 * const selected = true;
 * <div className={classNames(
 *     "flex",
 *     selected ? "bg-red-500" : "bg-black"
 *   )}>My innerText</div>
 *
 * @param classes Any number of args that are strings
 * @returns
 */
export default function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
