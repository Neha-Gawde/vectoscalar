import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetContent } from '../redux/Dashboard/DashboardAction';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import {Button, CircularProgress} from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import ViewModal from './ViewModal';
import '../pages/dashboard.css';


function DashboardCmp() {
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(onGetContent())
    }, [])

    const contentList = useSelector((state) => {
        return state.content;
    })
    const {loading, content} = contentList;
    // console.log(content)

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("")
    const [view, setView] = useState(false);
    const onView = (title, link) =>{
        setView(!view);
        setTitle(title)
        setLink(link)
    }
    return (
        <div>
            {loading ? <CircularProgress/>
                :
                <>
                {content.items.length > 0?
                    content.items.map((element, index)=>(
                        <div className='box'>
                            {/* <Tooltip title="Author">
                                <p className='name'>{element.owner.display_name}</p>
                            </Tooltip>
                            <Tooltip title="Title">
                                <p className='title'>{element.title}</p>
                            </Tooltip>
                            <Tooltip title="Date of Creation">
                                <p className='creationdate'>{element.creation_date}</p>
                            </Tooltip> */}
                            
                            <p className='name'>{element.owner.display_name}</p>
                            <p className='title'>{element.title}</p>
                            <p className='creationdate'>{element.creation_date}</p>
                            <div style={{marginTop:-45}}>
                                <Tooltip title="View Details">
                                    <VisibilityOutlinedIcon
                                        onClick={()=>{onView(element.title, element.link)}}
                                    className="visibleicon">
                                    </VisibilityOutlinedIcon>
                                </Tooltip>
                            </div>
                           
                        </div>
                    ))
                    
                    :
                    <p>No data found</p>
                }
                </>
            }
            {view ?
                <ViewModal
                    open={view}
                    toggle={onView}
                    title={title}
                    link={link}
                />
            :
                ""
            }
        </div>
    )
}

export default DashboardCmp
