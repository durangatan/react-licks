import React, { ReactNodeArray } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type DragAndDropFormProps = {
  children: ReactNodeArray;
  onDragEnd: (any: any) => any;
};

const FlexRow = styled.div`
  display: flex;
`;

export default function DragAndDropForm({ children, onDragEnd }: DragAndDropFormProps) {
  return (
    <ul>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div ref={provided.innerRef}>
              {children.map((child, index) => {
                return (
                  <FlexRow key={index}>
                    <Draggable draggableId={String(index)} index={index}>
                      {provided => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                      )}
                    </Draggable>
                    {child}
                  </FlexRow>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </ul>
  );
}
