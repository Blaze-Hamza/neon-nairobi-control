export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cyber-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-green/5 via-transparent to-transparent" />
    </div>
  );
}