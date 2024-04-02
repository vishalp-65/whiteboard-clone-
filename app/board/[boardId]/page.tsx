import { Canvas } from "./_components/convas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
