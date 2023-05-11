export default function clsx(...args) {
  return args.filter((item) => typeof item === 'string' && item).join(' ');
}
