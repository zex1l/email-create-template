'use client';
import { sidebarElementsComponent } from './data/component.data';
import { sidebarElementsLayout } from './data/layout.data';
import { useScreenSize } from './hooks/use-screen-size';
import EditorCanvas from './ui/canvas/editor-canvas';
import { EditorHeader } from './ui/editor-header';
import EditorLayout from './ui/editor-layout';
import EditorSettings from './ui/settings/editor-settings';
import { EditorSideBarElements } from './ui/sidebar/editor-sidebar-elements';
import { useDragAndDropCanvas } from './hooks/use-drag-and-drop-canvas';
import { useEmailTemplate } from '@/shared/store/email-template.store';
import { useClickOutside } from './hooks/use-click-outside';
import { useGetHtmlCode } from './hooks/use-get-html-code';
import { useGetTemplateFromDb } from './hooks/use-get-template-from-db';
import { useSaveTemplate } from './hooks/use-save-template';

type Props = {
  templateId: string | undefined;
};

const Editor = ({ templateId }: Props) => {
  const { screen, setScreen } = useScreenSize();
  const { dragComponent, dragLayout } = useDragAndDropCanvas();
  const { wrapperRef, settingsRef } = useClickOutside();
  const { refHtmlBlock, onOpenCodeModal } = useGetHtmlCode();

  const { emailTemplate } = useEmailTemplate();
  useGetTemplateFromDb({ templateId: templateId || '' });
  const { loadingUpdate, onSaveTemplate } = useSaveTemplate({
    templateId: templateId || '',
  });

  return (
    <div className="px-5 my-10 flex flex-col gap-5 h-[85%]">
      <EditorHeader
        buttonSave={{ onSaveTemplate, loadingUpdate }}
        onOpenModal={onOpenCodeModal}
        onChageScreenSize={setScreen}
        title={
          <h2 className="text-2xl font-semibold text-primary">
            Editor Email Template
          </h2>
        }
        screenSize={screen}
      />
      <EditorLayout
        sidebar={
          <EditorSideBarElements
            onDragComponentStart={dragComponent.onDragComponentStart}
            onDragLayoutStart={dragLayout.onDragLayoutStart}
            elementsLayout={sidebarElementsLayout}
            elementsComponents={sidebarElementsComponent}
          />
        }
        canvas={
          <EditorCanvas
            screenSize={screen}
            canvasElements={emailTemplate}
            onDragOver={dragLayout.onDragOverLayoutToCanvas}
            onDropHandle={dragLayout.onDropHandleLayoutToCanvas}
            dragOver={dragLayout.dragOverCanvas}
            onDragOverToElement={dragComponent.onDragOverComponentToLayout}
            onDropToElement={dragComponent.onDropComponentToLayout}
            dragOverElement={dragComponent.dragOverLayoutElement}
            ref={wrapperRef}
            refHtmlBlock={refHtmlBlock}
          />
        }
        settings={<EditorSettings ref={settingsRef} />}
      />
    </div>
  );
};

export default Editor;
