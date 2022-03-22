import classNames from 'classnames'
import React from 'react'
import { File, types } from 'react-bricks/frontend'
import { FiFile, FiFilePlus } from 'react-icons/fi'
import blockNames from '../../utils/blockNames'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export interface DocumentProps {
  color?: { color: string; className: string }
}

const BrickDocument: types.Brick<DocumentProps> = ({ color, ...rest }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div
      className={classNames(
        'w-5xl  mx-auto px-6 py-2',
        color?.className
      )}
      {...rest}
    >
      
      <File
        propName="file"
        renderBlock={file => {
          console.log(file.url)
          return file ? (
            
            <div className="w-full flex font-semibold h-full">
              <h1>PDF-Preview</h1>
              <Document
                file={file.url}
                
              >
                <Page pageNumber={1} />
              </Document>
            
          
              <FiFile className="mr-2" />
              {file.name} - {file.size.toFixed(2)}MB
            
              
            </div>
            
          ) : (
            <div className="flex font-semibold h-full items-center">
              <FiFilePlus className="mr-2" />
              Add document
            </div>
          )
        }}
      />
      
    </div>
  )
}

BrickDocument.schema = {
  name: blockNames.Document,
  label: 'Document',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Document.tsx',
  getDefaultProps: () => ({
    file: {
      name: 'React Bricks Website.pdf',
      size: 521.929,
      url:
        'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
    },
  }),
  sideEditProps: [
    {
      name: 'color',
      label: 'Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            value: {
              color: '#c6f6d5',
              className: 'bg-green-100 dark:bg-gray-800',
            },
            label: 'Green',
          },
        ],
      },
    },
  ],
}
export default BrickDocument
